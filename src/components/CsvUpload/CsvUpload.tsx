import './CsvUpload.scss'
import { PropsWithChildren, useState, useRef } from 'react';
import { parse } from 'papaparse';
import { Button } from '../Button'

// interface resultType<T> {
//     data: Array<T>;
// }

export const CsvUpload = (props: PropsWithChildren) => {
    const { children } = props

    const [parsedData, setParsedData] = useState<Object | undefined>()

    const handleDrag = (e: React.DragEvent): void => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent): void => {
        e.preventDefault()
        const csvFile = Array.from(e.dataTransfer.files)
            .find(async (item) => {
                return item.type === "text/csv"
            })
        console.log({ csvFile });

        if (csvFile) {
            // toast
            parseFile(csvFile)
        } else {
            // toast and error handle
        }
    }

    const parseFile = async (file: File) => {
        const textFile = await file.text();
        const data = parse(textFile, {
            header: true
        })

        data && setParsedData(data)
    }

    return (
        <>
            <div className="csv-upload__container" draggable onDragOver={handleDrag} onDrop={handleDrop}>
                <div>
                    {children}
                </div>
            </div>
            <div className="csv-upload__table">
                {parsedData && JSON.stringify(parsedData)}
                {parsedData && <Button text="Submit"/>}
            </div>
        </>

    )
}