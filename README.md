# CypherVis3D

CypherVis3D is a data visualization tool for viewing the subgraph retrieved by the Cypher query language provided by Neo4j. The subgraph retrieved by Cypher often contains various categories of nodes and they also have multiple properties. It makes difficult to find important characteristics of the graph when nodes are colored for each categories or properties since human being cannot recognize multi-colored items simultaneously. We thus use the icons in a 3D form that express the categories of nodes. 

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

5. Install [express.js](https://expressjs.com/)

6. Install [d3.js](https://d3js.org/)

7. Install [three.js](https://threejs.org/)

## How to use

1. Store data into Neo4j (e.g, The movie sample database provided by Neo4j.)

2. Start Neo4j

   Set password to access Neo4j via http://localhost:7474 and edit cypherVis3DWebServer8080.js to set the password.

3. Start Web server

   ```bash
   $ node cypherVis3DWebServer8080.js
   ```

4. Access http://localhost:8080/cypherVis3D.html

5. Run (input Cypher Query)

