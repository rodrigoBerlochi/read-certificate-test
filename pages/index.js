import {FileInput} from '../components/FileInput';
import {readPrivateKeyFromCert} from '../modules/certh-auth'; // todo review this

const handleReadResult = (value) => {
    console.log(value);
    const pk = readPrivateKeyFromCert(value);
};

export default () => {
    return (
        <FileInput
            id={'cert-input'}
            readingType={FileInput.EnumReadingsType.text}
            getResult={handleReadResult}
        />)
};