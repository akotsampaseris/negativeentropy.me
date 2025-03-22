export const dateFormatter = (date: string | Date) => (
    new Date(date).toLocaleDateString('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
)