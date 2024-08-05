import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const CollapsibleCodeBlock = ({ filename, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-2 bg-gray-800 text-white rounded-t-md">
        <span className="font-mono text-sm">{filename}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-gray-900 rounded-b-md">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-white">{code}</code>
        </pre>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleCodeBlock;
