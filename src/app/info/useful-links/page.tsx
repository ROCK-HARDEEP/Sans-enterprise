import React from 'react';

export const metadata = {
  title: 'Useful Links | sans',
  description: 'Access important resources, embassy websites, scholarship portals, and educational information.',
};

const UsefulLinksPage = () => {
  // Sample links data - in a real app, this would come from a database or API
  const links = [
    {
      category: 'Embassy & Visa Information',
      items: [
        {
          title: 'U.S. Embassy in India',
          url: 'https://in.usembassy.gov/',
          description: 'Official website of the U.S. Embassy and Consulates in India.',
        },
        {
          title: 'UK Visas and Immigration',
          url: 'https://www.gov.uk/government/organisations/uk-visas-and-immigration',
          description: 'Information on UK visas, immigration, and citizenship.',
        },
        {
          title: 'VFS Global',
          url: 'https://www.vfsglobal.com/',
          description: 'Visa application services for multiple countries.',
        },
        {
          title: 'Study Permits for Canada',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
          description: 'Guide to studying in Canada and obtaining study permits.',
        },
      ],
    },
    {
      category: 'Scholarship Resources',
      items: [
        {
          title: 'Chevening Scholarships',
          url: 'https://www.chevening.org/',
          description: 'UK government\'s global scholarship program.',
        },
        {
          title: 'Fulbright-Nehru Fellowships',
          url: 'https://www.usief.org.in/Fulbright-Nehru-Fellowships.aspx',
          description: 'Educational exchanges between India and the United States.',
        },
        {
          title: 'Commonwealth Scholarships',
          url: 'https://cscuk.dfid.gov.uk/apply/applicants/',
          description: 'Scholarships for students from Commonwealth countries.',
        },
        {
          title: 'DAAD Scholarships',
          url: 'https://www.daad.in/en/',
          description: 'German Academic Exchange Service scholarships.',
        },
      ],
    },
    {
      category: 'Test Preparation Resources',
      items: [
        {
          title: 'ETS (TOEFL & GRE)',
          url: 'https://www.ets.org/',
          description: 'Official website for TOEFL and GRE tests.',
        },
        {
          title: 'IELTS Official',
          url: 'https://www.ielts.org/',
          description: 'Information about IELTS test, preparation, and registration.',
        },
        {
          title: 'GMAC (GMAT)',
          url: 'https://www.mba.com/',
          description: 'Official GMAT exam website.',
        },
        {
          title: 'CollegeBoard (SAT)',
          url: 'https://www.collegeboard.org/',
          description: 'Register for the SAT and access study materials.',
        },
      ],
    },
    {
      category: 'University Rankings & Research',
      items: [
        {
          title: 'QS World University Rankings',
          url: 'https://www.topuniversities.com/',
          description: 'Global university rankings and educational resources.',
        },
        {
          title: 'Times Higher Education',
          url: 'https://www.timeshighereducation.com/',
          description: 'University rankings, news, and resources.',
        },
        {
          title: 'U-Multirank',
          url: 'https://www.umultirank.org/',
          description: 'Multidimensional university ranking system.',
        },
        {
          title: 'National Institutional Ranking Framework (NIRF)',
          url: 'https://www.nirfindia.org/',
          description: 'Rankings of institutions in India.',
        },
      ],
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Useful Links</h1>
          
          <p className="lead text-xl text-gray-700 mb-8">
            Access important resources to help you plan your education journey. 
            We've compiled essential links for visa information, scholarships, test preparation, 
            and university research.
          </p>
          
          {links.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                {section.category}
              </h2>
              
              <div className="space-y-5">
                {section.items.map((link, linkIndex) => (
                  <div key={linkIndex} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium mb-1">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-color hover:text-blue-700 hover:underline transition-colors"
                      >
                        {link.title}
                      </a>
                    </h3>
                    <p className="text-gray-600">{link.description}</p>
                    <div className="mt-2 flex items-center">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-500 hover:text-primary-color transition-colors flex items-center"
                      >
                        {link.url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-blue-50 rounded-lg p-6 mt-10 border border-blue-100">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">Note</h2>
            <p className="text-gray-700">
              The links provided on this page are for informational purposes only. 
              While we strive to keep these links up-to-date, sans is not responsible for the content 
              of external websites. Always verify the information from the official sources.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Can't find what you're looking for? <a href="/contact" className="text-primary-color hover:underline">Contact us</a> for personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UsefulLinksPage; 