import NewDocumentButton from "./NewDocumentButton";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Sidebar = () => {
  return (
    <>
    
      <div className="ml-6 min-w-80">
        <NewDocumentButton />
      </div>
    </>
  );
};

export default Sidebar;
