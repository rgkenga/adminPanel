export const schema = [
  {
    label: 'Название товара',
    name: 'name',
    type: 'text'
  },
  {
    label: 'Описание товара',
    name: 'description',
    type: 'text'
  },
  {
    label: 'Категория',
    name: 'category',
    type: 'text'
  },
  {
    type: 'group',
    name: 'variants',
    repeatable: true,
    addLabel: '+ Добавить вариацию',
    value: [{}],
    children: [
      {
        type: 'number',
        name: 'price',
        label: 'Цена'
      },
      {
        type: 'number',
        name: 'size',
        label: 'Размер'
      }
    ]
  },
  {
    type: 'submit',
    label: 'Кнопка'
  }
]
