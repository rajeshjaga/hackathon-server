import { buildSchema, GraphQLInputObjectType } from "graphql";
// =

// var wfh = GraphQLInputObjectType({
//     name: "WFH",
//     fields: {

//     }
// })

var schema = buildSchema(`
  type Query {
    user:{
    name:string,
    devices:{
        wfh:[array],
    }}
`);

export default schema;
