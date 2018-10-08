import React from 'react';
import PropsTypes from 'prop-types';
import {Input} from './Input';

/**
 * 
 */
export class FileInput extends React.Component{
    
    static EnumReadingsType = {
        text: 'readAsText',
        binaryString: 'readAsBinaryString',
        arrayBuffer: 'readAsArrayBuffer',
        dataURL: 'readAsDataURL'
    } 

    state = {
        isFileAPISupported: true,
        progress: 0
    }
    
    reader = null;

    componentDidMount () {
        if (!(window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob)) {
                this.setState({
                    isFileAPISupported: false
                });

                return;
        }

        this.reader = new FileReader();

    }

    onFileInputChange = (e) => {
        const file = e.target.files[0];

        this.reader.onload = (e) => {
            const result = e.currentTarget.result;
            this.props.getResult(result);
        };

        this.reader.onprogress = (e) => {
            const pgs = Math.round((e.loaded / e.total) * 100);
            this.setState({
                progress: pgs
            });
        };

        this.reader[this.props.readingType](file);
    }

    render () {
        const {isFileAPISupported, progress} = this.state;
        const {messageNoBrowserSupport} = this.props;

        return (
            <React.Fragment>
                {isFileAPISupported ? <Input
                    id={this.props.id}
                    type={'file'}
                    onInputChange={this.onFileInputChange}
                /> : messageNoBrowserSupport}
                <progress max={100} value={progress}></progress>
            </React.Fragment>
        );
    }
}

const readings = Object.values(FileInput.EnumReadingsType);

FileInput.propsTypes = {
    messageNoBrowserSupport: PropsTypes.string,
    getResult: PropsTypes.func.isRequired,
    readingType: PropsTypes.oneOf(readings).isRequired
}

FileInput.defaultProps = {
    messageNoBrowserSupport: 'Your browser has no support for Uploading Files. Use another browser.',
    getResult: (val) => {
        console.log(val);
    }
}