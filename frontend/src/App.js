import { useState } from "react";
import { fetchComments, getInsights } from "./api";

function App() {
    const [videoId, setVideoId] = useState("");
    const [insights, setInsights] = useState(null);

    const handleFetch = async () => {
        await fetchComments(videoId);
        const { data } = await getInsights(videoId);
        setInsights(data);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">YouTube Comment Sentiment Analysis</h1>
            <input 
                type="text" 
                placeholder="Enter YouTube Video ID" 
                className="border p-2" 
                value={videoId} 
                onChange={(e) => setVideoId(e.target.value)}
            />
            <button onClick={handleFetch} className="bg-blue-500 text-white p-2 ml-2">
                Analyze
            </button>

            {insights && (
                <div className="mt-4">
                    <p>Total Comments: {insights.total_comments}</p>
                    <p>Agreement: {insights.agreement_percentage.toFixed(2)}%</p>
                    <p>Disagreement: {insights.disagreement_percentage.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
}

export default App;
