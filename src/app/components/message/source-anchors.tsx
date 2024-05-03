import { Button } from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors

function getDomainFromUrl(url: string) {
  let domain = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
  domain = domain.replace(/^www\./, "");
  return domain;
}

export default function SourceAnchors({ sources }: { sources: Array<string>}) {
    return (
      <div style={{ paddingLeft: "35px" }}>
        { sources.map((source, index) => (
          <Button
            key={index} // eslint-disable-line react/no-array-index-key
            leftIcon={<AiOutlineLink/>}
            borderColor={colors?.primary}
            variant="outline"
            size="xs"
            marginEnd="10px"
            marginTop="10px"
            color={colors?.primary}
            as="a"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ background: colors?.primary, color: colors?.light}}
            >
              { getDomainFromUrl(source) }
            </Button>
        )) }
      </div>
    );
}