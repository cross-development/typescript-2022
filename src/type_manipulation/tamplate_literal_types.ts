{
  type ReadOrWrite = 'read' | 'write';
  type Bulk = 'bulk' | '';

  type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

  type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

  type T = Uncapitalize<ReadOrWriteBulk<Access>>;

  type ErrorOrSuccess = 'error' | 'success';

  type ResponseType = {
    result: `http${Capitalize<ErrorOrSuccess>}`;
  };

  const a: ResponseType = {
    result: 'httpError',
  };
}
