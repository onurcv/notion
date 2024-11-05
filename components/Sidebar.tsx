import NewDocumentButton from "./NewDocumentButton";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  const menuOptions = (
    <>
      <div className="flex flex-col gap-4">
        <NewDocumentButton />
      </div>
    </>
  );

  return (
    <>
      <div className="border-r relative pl-6 pr-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Seçenekler</SheetTitle>
              </SheetHeader>
              <div className="mt-6">{menuOptions}</div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:inline">{menuOptions}</div>
      </div>
    </>
  );
};

export default Sidebar;
