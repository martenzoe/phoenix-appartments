import { useTranslation } from "react-i18next";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Faq() {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true });

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          {t("faq.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 transform transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
