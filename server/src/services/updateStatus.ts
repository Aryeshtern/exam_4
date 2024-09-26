const statuses = ["manufactured", "assembled", ".shipped", "deployed", "detonated"];

const changeStatus = (status: string):string | null =>
{
    const currentIndex = statuses.indexOf(status);
    if (currentIndex === statuses.length - 1) {
        return null;
    } else {
        return statuses[currentIndex + 1];
    }
}

export default changeStatus;