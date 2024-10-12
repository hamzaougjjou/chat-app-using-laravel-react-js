import TextDirection from "./TextDirection";

const TextTruncator = ({ text, len = 150, styleClass = '' }) => {

    let truncatedText = "";
    try {
        truncatedText = text.substring(0, len);
    } catch {
        truncatedText = "";
    }

    return (
        <p
            className={styleClass}
        >
            <TextDirection text={truncatedText + (text.length > len ? '...' : "")} />
        </p>


    );
};

export default TextTruncator;
