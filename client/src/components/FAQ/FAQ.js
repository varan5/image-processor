/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is Algomastery ?",
    answer:
      "Algomastery is a e-learning platform, where one can learn and master coding skills.",
  },
  {
    question: "Does Algomastery provide certificate after completing a course ?",
    answer:
      "Yes, we do provide a certificate of mastery.",
  },
  {
    question: "How can students clear their doubts while taking a course ?",
    answer:
      "There is a Q&A section provided after each lecture to clear the doubts regarding any topic.",
  },
  {
    question: "Is learning practical or theoretical ?",
    answer:
      "We believe focusing on practical implementations along with a strong hold on conceptual theory.",
  },
  {
    question: "Is there examination at the end of the course to test the real skills ?",
    answer:
      "Yes, there is an mcq examination at the end of the course to make students interview ready.",
  },
  {
    question: "Is there any refund policy for the courses ?",
    answer:
      "No refund policy available as of now. Students can watch the free preview videos before purchasing the course.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

