import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const InvitePage = () => {
  const { unique_id } = useParams();  // <-- match param name here
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

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (!invitee) return <p className="p-4 text-center text-red-600">Invalid QR code or invitee not found.</p>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">🎉 Welcome {invitee.name}!</h1>
      <p className="text-lg">You are now checked in to the party! ✅</p>
      <p className="mt-4 text-sm text-gray-600">Email: {invitee.email}</p>
    </div>
  );
};

export default InvitePage;
