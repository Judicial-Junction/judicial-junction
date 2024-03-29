import { DocIcon, FileIcon } from "@/app/_components/icons";
import { SearchResponse } from "@/server/api/routers/search_utils";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { closest } from "fastest-levenshtein";
import { useMemo } from "react";

function FindFuzzyWord(searched_keyword: string, case_text: string) {
  const wordsArray = case_text.split(/\s+/);
  const closest_word = closest(searched_keyword, wordsArray);
  const targetIndex = wordsArray.findIndex((word) =>
    word.includes(closest_word),
  );
  const prevSentence = wordsArray
    .slice(Math.max(targetIndex - 15, 0), targetIndex)
    .join(" ");
  if (targetIndex + 16 >= wordsArray.length)
    return [prevSentence, closest_word, ""] as [string, string, string];
  return [
    prevSentence,
    closest_word,
    wordsArray.slice(targetIndex + 1, targetIndex + 16).join(" "),
  ] as [string, string, string];
}

function GetFuzzySentence(keyword: string, judgement_text: string) {
  const sentencesToDisplay = useMemo(
    () => FindFuzzyWord(keyword, judgement_text),
    [keyword, judgement_text],
  );
  return sentencesToDisplay;
}

export default function Response({ data }: { data: SearchResponse[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {data.map((result) => (
        <div className="w-[800px]" key={result._id}>
          <Link
            className="blue-500 border-2 border-black text-blue-500"
            href={result.fields["Judgement PDF URL"][0]}
          >
            click here
          </Link>
          <h1 className="border-2 border-black bg-blue-100">
            {result.fields["Case Title"][0]}
          </h1>
          {result.fields["Judgement Text"] && (
            <>
              {result.search_type == "Fuzzy Search" && (
                <div className="border-2 border-black">
                  <p>
                    {"..." +
                      GetFuzzySentence(
                        result.search_query,
                        result.fields["Judgement Text"][0],
                      )[0] +
                      " "}
                    <mark className="bg-slate-300 dark:bg-slate-300">
                      {
                        GetFuzzySentence(
                          result.search_query,
                          result.fields["Judgement Text"][0],
                        )[1]
                      }
                    </mark>
                    {" " +
                      GetFuzzySentence(
                        result.search_query,
                        result.fields["Judgement Text"][0],
                      )[2] +
                      "..."}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
