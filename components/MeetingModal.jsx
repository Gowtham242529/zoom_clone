import React, { Children } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  buttonText,
  handleClick,
  className,
  buttonIcon,
  image,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="add meeting" width={72} height={72} />
            </div>
          )}
          <h1 className={cn(`text-3xl font-bold leading-[42px] ${className}`)}>{title}</h1>
          {children}
          <Button className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-blue-1" onClick={handleClick}>
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="Button Icon"
                width={13}
                height={13}
              /> 
            )} &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
