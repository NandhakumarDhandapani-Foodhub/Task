import {baseTestURL} from './HelpNetwork';

export const Network = {
    getTest: () => baseTestURL.get(`/comments?postId=1`)
}