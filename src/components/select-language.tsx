import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KIDLINGO_LANGUAGES } from "@/lib/schema";
import useLanguageStore from "@/hooks/use-language";

export function SelectLanguage({
  languages,
}: {
  languages: KIDLINGO_LANGUAGES[];
}) {
  const useLanguage = useLanguageStore((state) => state);
  return (
    <Select
      defaultValue={languages[0].name}
      onValueChange={(v) =>
        useLanguage.setLanguage(
          languages.find((l) => l.name === v)?.id!,
          languages.find((l) => l.name === v)?.name!
        )
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language.id} value={language.name}>
              {language.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
