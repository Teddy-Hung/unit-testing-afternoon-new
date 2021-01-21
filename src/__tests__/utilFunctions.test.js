import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter a string with less than 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(shortText.length);
})

test('shortenText shortens text over 100 characters and adds 3 periods at the end', () => {
    const shortenedText = shortenText(longText)
    expect(shortenedText).not.toHaveLength(longText.length)
    expect(shortenedText.slice(-3)).toBe('...')
})

test('wordCount should count number of words in a setence correctly', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName should attach users full name to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName');
})

test('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });