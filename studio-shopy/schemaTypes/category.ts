import {defineField, defineType} from 'sanity'

export const Category = defineType({
    name: "category",
    type: "document",
    title: "Categories",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name of category"
        })
    ]
})