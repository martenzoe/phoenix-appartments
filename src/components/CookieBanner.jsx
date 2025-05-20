import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white text-sm p-4 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="md:max-w-3xl">
          Wir verwenden Cookies, um Ihnen eine bessere Browser-Erfahrung zu bieten, Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien bereitzustellen und unseren Traffic zu analysieren. Lesen Sie, wie wir Cookies verwenden und wie Sie sie steuern können, indem Sie auf Cookie-Einstellungen klicken.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent("denied")}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white"
          >
            Cookies ablehnen
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
          >
            Cookies akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
