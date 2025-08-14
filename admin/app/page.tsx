import { Button } from "@/components/ui/button";
import { MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button className="cursor-pointer" variant={"destructive"} size={"xl"}>
        Click me
        <MousePointer2 />
      </Button>
    </div>
  );
}
