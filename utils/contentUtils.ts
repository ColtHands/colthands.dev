export type BlogPost = {
    date: string,
    title: string,
    _path?: string,
    description?: string,
}


/**
 * @param {date} string - Date string in dd.mm.yyyy format
 * @returns null | string - Returns null if date is not provided, otherwise returns formatted date 
 */
export function formatDate(date?: string): string | null {
    if(!date) return null

    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

export function removeTitleFromDocument(document: any) {
    return document.replace(/<h1.*?>(.*?)<\/h1>/, '')
}