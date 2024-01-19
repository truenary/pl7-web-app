import React from 'react'

function Dashboard_map() {
    const lat = 53.338741;
    const lon = -6.261563;
    const zoom = 16; // 15 is ideal


    return (
        <div>






            <div className="">
                <iframe
                    src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google map"
                ></iframe>
            </div>



        </div>
    )
}

export default Dashboard_map
