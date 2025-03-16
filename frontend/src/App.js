import { useState } from "react";
import { fetchComments, getInsights } from "./api";

function App() {
    const [videoId, setVideoId] = useState("");
    const [insights, setInsights] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        if (!videoId) {
            alert("Please enter a valid YouTube Video ID!");
            return;
        }

        setIsLoading(true);
        try {
            await fetchComments(videoId);
            const { data } = await getInsights(videoId);
            setInsights(data);
        } catch (error) {
            console.error("Error fetching insights:", error);
            alert("An error occurred while fetching insights. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Business Sentiment Analysis
                </h1>

                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Enter YouTube Video ID"
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        value={videoId}
                        onChange={(e) => setVideoId(e.target.value)}
                    />

                    <button
                        onClick={handleFetch}
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Analyzing..." : "Analyze Comments"}
                    </button>
                </div>

                {insights && (
                    <div className="mt-8 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Analysis Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Total Comments</p>
                                <p className="text-xl font-bold text-blue-800">{insights.total_comments}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Agreement</p>
                                <p className="text-xl font-bold text-green-800">
                                    {insights.agreement_percentage.toFixed(2)}%
                                </p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Disagreement</p>
                                <p className="text-xl font-bold text-red-800">
                                    {insights.disagreement_percentage.toFixed(2)}%
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
