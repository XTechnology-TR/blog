import {parseISO, format} from "date-fns";
import {tr} from "date-fns/locale";

// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Date({dateString}) {
	const date = parseISO(dateString);
	const formatOptions = {
		length: dateString.length,
		locale: tr,
	};

	return (
		<time dateTime={dateString}>
			{format(date, "d-LLLL-yyyy", formatOptions)}
		</time>
	);
}
