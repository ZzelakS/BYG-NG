import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const InvitePage = () => {
  const { unique_id } = useParams(); // make sure your route uses `:unique_id`
  const [invitee, setInvitee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndCheckIn = async () => {
      try {
        const ref = doc(db, "party_invitees", unique_id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          setInvitee(data);

          await updateDoc(ref, {
            checked_in: true,
            check_in_time: serverTimestamp()
          });
        } else {
          setInvitee(null);
        }
      } catch (error) {
        console.error("Error fetching invitee:", error);
        setInvitee(null);
      }
      setLoading(false);
    };

    fetchAndCheckIn();
  }, [unique_id]);

  if (loading) return <p className="p-6 text-center text-lg">Loading...</p>;
  if (!invitee) return <p className="p-6 text-center text-red-600 text-lg">Invalid QR code or invitee not found.</p>;

 return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-4 py-10">
    {/* Logo */}
    <img src="/logo 2.png" alt="Logo" className="w-48 h-auto mb-8" /> {/* Increased size */}

    {/* Invite content */}
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">🎉 Welcome {invitee.name}!</h1>
      <p className="text-xl text-gray-800 mb-2">You are now checked in to the party! ✅</p>
      <div className="mt-6 text-sm text-gray-600">
        <p><strong>Email:</strong> {invitee.email}</p>
        {invitee.phone && <p className="mt-1"><strong>Phone:</strong> {invitee.phone}</p>}
      </div>
    </div>
  </div>
);
};

export default InvitePage;
