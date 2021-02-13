{
  'import/order'[
    ('warn',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      alphabetize: {
        order: 'asc',
      },
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
    })
  ]
}
