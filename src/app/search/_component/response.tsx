import { type SearchResponse } from "@/server/api/routers/search_utils";
import { Link } from "@nextui-org/link";
import { closest } from "fastest-levenshtein";
import { useMemo } from "react";
import ChatDialog from "./chat";

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
    <div className="flex flex-col space-y-2">
      {data.map((result) => (
        <div
          className="center w-[1000px] divide-y divide-slate-400 border-1 border-slate-500 shadow-lg"
          key={result._id}
        >
          <div className="blue-500 flex w-[1000px] space-x-5 bg-indigo-100 text-blue-500">
            <Link
              className="text-blue-500"
              target="_blank"
              href={result.fields["Judgement PDF URL"][0]}
            >
              click here
            </Link>
            <ChatDialog />
          </div>
          <div>
            <h1 className="flex items-start bg-indigo-100 text-xl font-bold">
              {result.fields["Case Title"][0]}
            </h1>
          </div>
          {result.fields["Judgement Text"] &&
            result.search_type == "Fuzzy Search" && (
              <div className="text-left">
                <p>
                  {"..." +
                    GetFuzzySentence(
                      result.search_query,
                      result.fields["Judgement Text"][0],
                    )[0] +
                    " "}
                  <mark className="bg-slate-900 text-white">
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
          {result.fields.Sentences && (
            <div className="text-left">
              <p>
                {result.fields.Sentences[0] + " "}
                {result.fields.Sentences[1] + " "}
                <mark className="bg-slate-900 text-white">
                  {result.fields.Sentences[2] + " "}
                </mark>
                {result.fields.Sentences[3] + " "}
                {result.fields.Sentences[4]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
