
// Literal Types: Without 'as const', the types of the object properties would be inferred as more general types, such as string or number. By using as const, the types become more specific. For example, "primary" becomes the literal type "primary" instead of just string.

// Immutability: When i use as const, TypeScript also treats the entire object as immutable. This means that the properties of the object cannot be changed after it's created. This can be useful if i want to ensure the values don't get accidentally modified later in another file.

export const buttonConfig = [
    { variant: "primary" as const, size: "sm" as const, borders: "light" as const, increment: 2, label: "Primary" },
    { variant: "secondary" as const, size: "md" as const, borders: "medium" as const, increment: 4, label: "Secondary" },
    { variant: "danger" as const, size: "lg" as const, borders: "heavy" as const, increment: 6, label: "Danger" },
    { variant: "reset" as const, size: "xl" as const, borders: "heavy" as const, increment: 0, label: "reset",},
]

// Overall, the use of 'as const' in this case helps to ensure type safety and immutability for your configuration data, which can make your code more robust and easier to work with.