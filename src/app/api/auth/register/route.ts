import { createUser, getUserByEmail } from "@/lib/drizzle/users";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { sendMail } from "@/lib/mail/mailService";

export async function POST(request: Request) {
  try {
    const req_json = await request.json();
    // console.log("------------req_json::::", { req_json });

    const user = await getUserByEmail(req_json.email);
    // check usernaem is unique
    // console.log("------------user::::", { user });

    if (user) {
      return NextResponse.json({
        message: "Registration Failed with: " + req_json.email,
      });
    }

    const RegistrationSchema = z
      .object({
        username: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(3),
        password_repeat: z.string(),
      })
      .refine(
        (schemaData) => {
          return schemaData.password === schemaData.password_repeat && !user;
        },
        {
          message: "Passwords do not match",
          path: ["password_repeat"],
        }
      );

    const data = RegistrationSchema.parse(req_json);
    // console.log("data in registration::::", { data });

    // encrypt password
    const hashedPassword = await hash(data.password, 10);

    // verification expiry time
    const current = new Date();
    // const validationPeriode = 86400000; // 1 day in mili seconds
    // const validationPeriode = 3600000; // 1 hour in mili seconds
    const validationPeriode = 600000; // 10 minuts in mili seconds
    const expiryTime = new Date(current.getTime() + validationPeriode);
    const verifyToken = uuidv4();

    const res = await createUser({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      // verifyToken: verifyToken,
      // verifyTokenExpiry: expiryTime,
    });

    // send email verification
    const toEmail = "n4djib@gmail.com";
    const subject = "verification email";
    const otpText = `<p>click this <a href="http://localhost:3000/auth/verifyemail?token=${verifyToken}">Link</a> to validate your email.</p>`;
    await sendMail(toEmail, subject, otpText);

    return NextResponse.json({
      // message: "successfuly registered " + data.email,
      message: "successfuly registered ",
      // response: res,
    });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "Failed to register: ", e });
  }
}
