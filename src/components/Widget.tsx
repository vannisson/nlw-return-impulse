import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute flex flex-col items-end bottom-4 right-4 md:bottom-8 md:right-8 ">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="overflow-hidden transition-all duration-500 ease-linear select-none max-w-0 group-hover:max-w-xs">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
