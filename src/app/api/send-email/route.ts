import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/mailService";

/* i'm not sending anything just POST to it empty */
export async function POST(request: Request) {
  const email_to = "n4djib@gmail.com";

  try {
    const mail = await sendMail(
      email_to,
      "TEST 2",
      "THIS IS A TEST FOR MY MEDIUM USERS"
    );

    console.log("Mail++++", { mail });

    // BUG: it's returning success when an error occurs

    return NextResponse.json(
      { message: "Email Sent to: " + email_to },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Email Failed...", error },
      { status: 400 }
    );
  }
}
