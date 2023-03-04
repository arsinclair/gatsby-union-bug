exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    const typeDefs = `
        type VideoGalleryJson implements Node {
            node_locale: String
        }

        type TextModuleJson implements Node {
            node_locale: String
        }

        union Content = TextModuleJson | VideoGalleryJson

        type ReportJson implements Node {
            contentComposer: [ Content ] @link(by: "jsonId")
        }
    `;

    createTypes(typeDefs);
};