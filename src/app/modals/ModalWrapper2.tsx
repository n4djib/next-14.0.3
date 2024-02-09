import { useStore } from "@/lib/zustand/useStore";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";

type ModalWrapperProps = {
  children: React.ReactNode;
  closeOnModalOverlay: boolean;
  title: string;
};

const ModalWrapper = ({
  children,
  closeOnModalOverlay,
  title,
}: ModalWrapperProps) => {
  const closeModal = useStore((state) => state.closeModal);

  const closeOnOverlayClick = () => closeOnModalOverlay && closeModal();

  return (
    <Dialog open={true} onOpenChange={closeOnOverlayClick}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
