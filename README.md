# cypherVis3D -- Visualization for Streaming Data Retrieved from the Neo4j Graph Database.

[cypherVis3D] is a data visualization tool for viewing the subgraph retrieved by the Cypher. The subgraph retrieved by Cypher often contains various categories of nodes and they also have multiple properties. It makes difficult to find important characteristics of the graph when nodes are colored for each categories or properties since human being cannot recognize multi-colored items simultaneously. We thus use the icons in a 3D form that express the categories of nodes. 

To retrieve the subgraph from the graph database, user specifies the conditions of "edges" in the Cypher query language. This approach enables to visualizes streaming data easily by specifying in the "ORDER BY" clause.

## Demo movie
https://www.youtube.com/watch?v=PcEUL_5NXbI

## Live demo
http://qa.fujimura.com:8080/neo3vis/

## How to install

1. Install [Neo4j](http://neo4j.org)

2. Install [node.js](http://nodejs.org)

3. Install [seraph.js](https://github.com/brikteknologier/seraph)

4. Install [socket.io](http://socket.io/)

## How to use

1. Store data into Neo4j

2. Start Neo4j

3. Start Web server
```bash
$ sudo nodejs cypherVis3DWebServer8080.js
```

4. Access http://localhost:8080/neo3vis/

5. Run (input Cypher Query)

