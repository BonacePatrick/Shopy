import {defineField, defineType} from 'sanity'

export const Product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name of product"
        }),
        defineField({
            name: "images",
            type: "array",
            title: "Product images",
            of: [{type: "image"}]      
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description of product"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {source: "name"}
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price"
        }),
        defineField({
            name: "price_id",
            type: "string",
            title: "Price ID"
        }),
        defineField({
            name: "category",
            type: "reference",
            title: "Product Category",
            to: [{type: "category"}]
        })
    ]
})