import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';

function GatewayItem({ gateway }) {
    const [enabled, setEnabled] = useState(gateway.enabled);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const Auth = useSelector(state => state.Auth);

    const handleToggle = async () => {
        setLoading(true);  // Start the loading state
        setError(null);    // Clear any previous errors

        try {
            // Send a request to toggle the gateway enabled status
            const response = await axios({
                url: import.meta.env.VITE_API_URL + "/payment-gateways/toggle/" + gateway.id,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + Auth.token, // Pass token here
                },
                data: JSON.stringify({ "enabled": !enabled })
            });

            if (response.status === 200) {
                // Update the enabled state if the request is successful
                setEnabled(!enabled);
            } else {
                throw new Error("Failed to update the gateway status");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while updating the gateway status.");
        } finally {
            setLoading(false); // Stop the loading state
        }
    };

    return (
        <li className="flex relative justify-between items-center border-b border-border pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <CreditCard className="w-8 h-8 text-muted-foreground" />
                <div>
                    <span className="text-foreground text-lg font-medium">{gateway.name}</span>
                    <p className="text-sm text-muted-foreground">{gateway.description}</p>
                </div>
            </div>

            <span className='text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {loading && <Loading />}
            </span>

            <label className="relative inline-flex items-center cursor-pointer">


                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    onChange={handleToggle}
                    disabled={loading} // Disable while loading
                />

                <div className="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-4 
          peer-focus:ring-blue-500-foreground/20 peer-checked:after:translate-x-full 
          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
          after:transition-all peer-checked:bg-blue-500 bg-red-900"></div>
            </label>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </li>
    );
}

export default GatewayItem;
