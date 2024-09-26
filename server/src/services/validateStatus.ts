const statuses: string[] = ["manufactured", "assembled", "shipped", "deployed"];

export const isValidStatus = (status: string): boolean => {
    return statuses.includes(status);
}