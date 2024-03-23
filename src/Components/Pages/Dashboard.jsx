import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, {
  Controls,
  Background,
  BaseEdge,
  useNodesState,
  useEdgesState,
  getStraightPath,
  getMarkerEnd,
} from "reactflow";
import "reactflow/dist/style.css";

function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <line
        id={id}
        x1={sourceX + 70}
        y1={sourceY - 20}
        x2={targetX - 70}
        y2={targetY + 20}
        stroke="black"
        style={{
          stroke: "black",
          strokeWidth: 2,
        }}
        markerEnd={getMarkerEnd("arrowclosed", "white")}
      />
    </>
  );
}
const initialNodes = [
  {
    id: "1",
    data: { label: "Car" },
    position: { x: 0, y: 0 },
    type: "input",
    style: { backgroundColor: "red", color: "white", font: "bold" },
  },
  {
    id: "2",
    data: { label: "Research" },
    position: { x: 230, y: -200 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "3",
    data: { label: "Planning" },
    position: { x: 230, y: -100 },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "4",
    data: { label: "Designing" },
    position: { x: 230, y: 7 },
    style: { backgroundColor: "yellow", color: "black" },
  },
  {
    id: "5",
    data: { label: "Manufacturing" },
    position: { x: 230, y: 100 },
    style: { backgroundColor: "gray", color: "white" },
  },
  {
    id: "6",
    data: { label: "Sales/Marketing" },
    position: { x: 230, y: 200 },
    style: { backgroundColor: "brown", color: "white" },
  },
  {
    id: "7",
    data: { label: "External" },
    position: { x: 450, y: -235 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "8",
    data: { label: "Internal" },
    position: { x: 450, y: -175 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "9",
    data: { label: "PRD" },
    position: { x: 450, y: -125 },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "10",
    data: { label: "Specs" },
    position: { x: 450, y: -75 },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "11",
    data: { label: "Hardware" },
    position: { x: 450, y: -25 },
    style: { backgroundColor: "yellow", color: "black" },
  },
  {
    id: "12",
    data: { label: "Software" },
    position: { x: 450, y: 30 },
    style: { backgroundColor: "yellow", color: "black" },
  },
  {
    id: "13",
    data: { label: "Material" },
    position: { x: 450, y: 80 },
    style: { backgroundColor: "gray", color: "white" },
  },
  {
    id: "14",
    data: { label: "Production" },
    position: { x: 450, y: 125 },
    style: { backgroundColor: "gray", color: "white" },
  },
  {
    id: "15",
    data: { label: "Online" },
    position: { x: 450, y: 185 },
    style: { backgroundColor: "brown", color: "white" },
  },
  {
    id: "16",
    data: { label: "Dealership" },
    position: { x: 450, y: 235 },
    style: { backgroundColor: "brown", color: "white" },
  },
  {
    id: "17",
    data: { label: "B2C" },
    position: { x: 650, y: -280 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "18",
    data: { label: "B2C" },
    position: { x: 650, y: -190 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "19",
    data: { label: "Online" },
    position: { x: 850, y: -390 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "20",
    data: { label: "Interview" },
    position: { x: 850, y: -325 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "21",
    data: { label: "Public Data" },
    position: { x: 850, y: -240 },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "22",
    data: { label: "Health" },
    position: { x: 850, y: -180 },
    style: { backgroundColor: "blue", color: "white" },
  },

  {
    id: "23",
    data: { label: "Complete" },
    position: { x: 1050, y: -300 },
    style: { backgroundColor: "blue", color: "white" },
  },
];
const initialEdges = [
  { id: "1-2", source: "1", target: "2", type: "custom-edge" },
  { id: "1-3", source: "1", target: "3", type: "custom-edge" },
  { id: "1-4", source: "1", target: "4", type: "custom-edge" },
  { id: "1-5", source: "1", target: "5", type: "custom-edge" },
  { id: "1-6", source: "1", target: "6", type: "custom-edge" },
  { id: "2-7", source: "2", target: "7", type: "custom-edge" },
  { id: "2-8", source: "2", target: "8", type: "custom-edge" },
  { id: "3-9", source: "3", target: "9", type: "custom-edge" },
  { id: "3-10", source: "3", target: "10", type: "custom-edge" },
  { id: "4-11", source: "4", target: "11", type: "custom-edge" },
  { id: "4-12", source: "4", target: "12", type: "custom-edge" },
  { id: "5-13", source: "5", target: "13", type: "custom-edge" },
  { id: "5-14", source: "5", target: "14", type: "custom-edge" },
  { id: "6-15", source: "6", target: "15", type: "custom-edge" },
  { id: "6-16", source: "6", target: "16", type: "custom-edge" },

  { id: "7-17", source: "7", target: "17", type: "custom-edge" },
  { id: "7-18", source: "7", target: "18", type: "custom-edge" },

  { id: "17-19", source: "17", target: "19", type: "custom-edge" },
  { id: "17-20", source: "17", target: "20", type: "custom-edge" },
  { id: "17-21", source: "17", target: "21", type: "custom-edge" },
  { id: "17-22", source: "17", target: "22", type: "custom-edge" },

  { id: "19-23", source: "19", target: "23", type: "custom-edge" },
  { id: "22-23", source: "22", target: "23", type: "custom-edge" },
];
const edgeTypes = {
  "custom-edge": CustomEdge,
};

function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState(null);
  const onNodeMouseEnter = useCallback((event, node) => {
    setHoveredNode(node);
  }, []);
  const navigate = useNavigate();
  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  function handleNodeClick(id) {
    navigate(`/item/${id.target.innerText}`);
  }
  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        fitView
        onNodeClick={(nodeId) => handleNodeClick(nodeId)}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
      >
        <Background />
        <Controls />
        <div className="w-full bg-black text-gray-200 p-4 text-2xl font-semibold">
          Car timeline-mindmap Dashboard
        </div>
        {hoveredNode && (
          <div className="p-4 shadow-md rounded-md w-56 m-4 text-black bg-gray-300 font-semibold text-center ">
            <p className="font-extrabold text-xl">{hoveredNode.data.label}</p>
            <ul>
              <li>Total Review : 3,221</li>
              <li>Positive Review : 1,221</li>
            </ul>
          </div>
        )}
      </ReactFlow>
    </div>
  );
}

export default Dashboard;
