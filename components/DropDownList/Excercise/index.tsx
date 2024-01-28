export function HTMLText({text}: { text: string }) {
    return (
        <p dangerouslySetInnerHTML={{__html: text}}></p>
    )
}