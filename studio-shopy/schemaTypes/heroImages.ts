import {defineField, defineType} from 'sanity'

export const HeroImages = defineType({
    name: "heroImages",
    type: "document",
    title: "Hero images",
    fields: [
        defineField({
            name: "image1",
            type: "image",
            title: "Image one"
        }),
        defineField({
            name: "image2",
            type: "image",
            title: "Image two"
        })
    ]
})