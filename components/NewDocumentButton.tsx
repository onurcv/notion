import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";

function NewDocumentButton() {
  return (
    <Button className="w-[100%]">
      <CirclePlus />
      Yeni Çalışma Sayfası
    </Button>
  );
}

export default NewDocumentButton;
