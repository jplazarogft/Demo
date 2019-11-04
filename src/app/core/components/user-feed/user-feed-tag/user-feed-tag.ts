enum TagType {
  Regular = '',
  Success = 'success',
  Warn = 'warn',
}
export interface UserFeedTag {
  text: string;
  type: TagType;
}
