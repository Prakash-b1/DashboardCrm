import { useEffect, useRef, useState } from "react";
import jobcardstyle from './UploadFile.module.css';
import { ICONS } from '../../../Assets/Icons';

const UploadFile = ({ file, setFile, disabledValue,inputId }) => {
    const inputRef = useRef();
    const [fileSize, setFileSize] = useState("");

    const handleFile = (e) => {
        if (e.target.files.length === 0) {
            setFile(null);
        } else {
            setFile(e.target.files[0]);
        }
    };

    const handleRoundCancel = () => {
        setFile(null);
        inputRef.current.value = null;
    };

    useEffect(() => {
        if (file) {
            let actualSize = file.size;
            let requiredSize = "";
            if (actualSize < 1024) {
                requiredSize = `${actualSize} bytes`;
            } else if (actualSize >= 1024 && actualSize <= 1000000) {
                requiredSize = `${(actualSize / 1024).toFixed(2)} kb`;
            } else {
                requiredSize = `${(actualSize / (1024 * 1024)).toFixed(2)} mb`;
            }
            setFileSize(requiredSize);
        }
    }, [file]);

    return (
        <div>
            <input
                type="file"
                id={inputId}
                onChange={handleFile}
                className={jobcardstyle.file_input}
                disabled={disabledValue}
                accept="image/*,.doc,.docx,.xls,.xlsx,.pdf,.txt,.ppt,.pptx,.rtf,.odt,.ods,.odp"
                ref={inputRef}
            />
            {file ? (
                <div className={jobcardstyle.value}>
                    <label htmlFor={inputId} className={jobcardstyle.submit_file_upload_label}>
                        <button
                            onClick={handleRoundCancel}
                            className={jobcardstyle.cancel_img}
                            style={{ display: disabledValue ? "none" : "block" }}
                        >
                            {ICONS.cancelIconRound}
                        </button>
                        {ICONS.pageIcon}
                        <div className={jobcardstyle.pdf_values}>
                            <span className={jobcardstyle.first_value}>
                                <b>
                                    {file.name?.length > 15
                                        ? `${file.name.substring(0, 15)}...`
                                        : file.name}
                                </b>
                            </span>
                            <span className={jobcardstyle.last_value}>
                                {file.type?.split("/")[1]} / {fileSize}
                            </span>
                        </div>
                    </label>
                </div>
            ) : (
                <span className={jobcardstyle.value}>
                    <label htmlFor={inputId} className={jobcardstyle.file_upload_label}>
                        <span className={jobcardstyle.icon}>
                            {ICONS.attachFileIcon}
                        </span>
                        Attach file
                    </label>
                </span>
            )}
        </div>
    );
};

export default UploadFile;
