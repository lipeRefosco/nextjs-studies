export default function parseIntForced(param: string): number {
    return isNaN(parseInt(param)) ? 0 : parseInt(param);
}