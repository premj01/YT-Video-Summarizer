-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2024 at 07:42 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yt_summarizer`
--

-- --------------------------------------------------------

--
-- Table structure for table `summary_records`
--

CREATE TABLE `summary_records` (
  `entry_no` int(11) NOT NULL,
  `video_url` varchar(500) NOT NULL,
  `video_summary` varchar(10000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `last_accessed_by` varchar(100) DEFAULT NULL,
  `more_details` varchar(300) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `summary_records`
--

INSERT INTO `summary_records` (`entry_no`, `video_url`, `video_summary`, `created_at`, `updated_at`, `last_accessed_by`, `more_details`) VALUES
(1, 'https://youtu.be/_-mVpUbvDus?si=JnWc-GNei4ZNtSdG', '<h2>Indian IT Jobs Under Threat: Is Vietnam Stealing Our Jobs? </h2>\\n<p>????  A critical issue is shaking the foundations of India\'s tech sector, particularly in Bengaluru. ????️ For decades, Bengaluru has been the nurturing ground for the IT industry, making it a global city. ???? But now, Indian IT jobs are being outsourced to Southeast Asian countries like Vietnam. ????????</p>\\n<p>???? Why is this happening? Is India\'s IT dream run coming to an end? Why are renowned Indian tech professionals facing setbacks? Why are US tech companies turning to Southeast Asian nations? ????????</p>\\n<p>????  One Indian IT employee on Reddit shared a post that has stirred the tech world. ????  He revealed that his entire development team was replaced with Vietnamese developers, even though they don\'t speak proper English. ????️  This post has sparked discussions about how Indian tech jobs are being taken over by countries like Vietnam.</p>\\n<p>???? Vietnam\'s share in the global outsourcing market is increasing year by year. In recent years, Vietnam\'s IT outsourcing market has grown at 20-35% per year. ???? From being among the top 30 countries for IT outsourcing in 2010, Vietnam has secured a place in the top five in 2022. ????</p>\\n<p>???? So if Vietnam\'s outsourcing market is growing, who is it growing at the expense of? ????  India, obviously. India still dominates IT outsourcing, but other markets are cutting into its share. What is driving this sudden shift? </p>\\n<p>????️ To understand this, we need to revisit how India became an IT outsourcing giant. ???????? India\'s IT sector boomed in the 1990s due to the Y2K crisis. This crisis arose because computer programmers in the 70s, 80s, and 90s used only two digits to denote the year. ????️  They didn\'t reserve four digits, so when the year 2000 approached, there was a significant problem. ????  Computers would recognize 00 as 1900, leading to potential chaos. ???? </p>\\n<p>???????? India had an advantage. Most Indian programmers were proficient in COBOL, an old computer language. Colleges in advanced countries like the USA had stopped teaching COBOL, but Indian students still had this skill. ????  Additionally, Indian programmers did not demand high wages like their American counterparts. ???? They were English-speaking, hardworking, and willing to work for lower wages. ???? </p>\\n<p>????  Renowned American companies like Ford, American Airlines, and Philip Morris outsourced their work to Indian IT companies. Niit and Aptech conducted special courses to teach COBOL to Indian youth. By 1997, India\'s IT software export value crossed $1 billion. ????  Gradually, the IT sector continued growing into a massive industry, contributing 8-10% to India\'s GDP and providing employment to about 5.4 million youths. ✨</p>\\n<p>????  But now these jobs are under threat. IT outsourcing is moving to countries like Vietnam.  Why?  The reason is simple. ????  What India provided in the 90s and early 2000s is now being provided by Vietnam. ???????? </p>\\n<p>???? Junior to experienced developers are available for $20 to $35 per hour in Vietnam, compared to $45 per hour for an experienced developer in India. The average salary of expert developers in Vietnam is $1,322 or 1 lakh rupees, which is 30-50% cheaper compared to India and China. This makes it profitable for companies to get work done at a much lower cost in Vietnam. ???? </p>\\n<p>???? Additionally, the turnover rate in Vietnam is very low, less than 5%. This means Vietnamese developers bring stability and consistency to the company for a long time. ???? </p>\\n<p>???? Skill-wise, Vietnam is also good enough. In the 2020 Global Skills Index, Vietnam was recognized as the second most promising country in technical skills in the Asia Pacific region. ????  There are also no security issues. Despite being a communist country, Vietnam has political and economic stability. ????????</p>\\n<p>⛔ This shift has direct implications for India and Bengaluru. IT giants like Infosys and TCS have stopped campus hiring. The attrition rate in the IT sector has fallen from 27% to 16-19%, meaning new jobs are not being created and employees are stagnant. ???? Job portals like Xfo reported a 40-50% drop in hiring in 2023. ???? </p>\\n<p>???? So what should India do now? How can we challenge this?  Competing on lower wages is not a viable solution. ????‍♀️  We need to recall the special efforts made in the 90s and 2000s.  At that time, India became crucial to the tech world because there was no global talent pool with COBOL skills. ???? </p>\\n<p>???? Indian IT professionals should not limit themselves to affordable services and backend operations.  They must provide unique and demanding skill sets. They should work on advanced technologies like artificial intelligence (AI), blockchain, and cybersecurity. They should focus on research, innovation, and delivering unique solutions. ???? This should start from our engineering colleges. ????  It\'s a tragedy if someone with an engineering degree struggles in the job market and looks for crash courses. ????  Four years of engineering should make students job market ready and equipped to take advantage of the latest advancements in the industry. ????</p>\\n<p>????  Thank you for watching. Keep looking for better. Namaste! ????</p> \\n', '2024-08-04 05:41:42', '2024-08-04 05:41:42', NULL, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `summary_records`
--
ALTER TABLE `summary_records`
  ADD PRIMARY KEY (`entry_no`),
  ADD UNIQUE KEY `video_url` (`video_url`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `summary_records`
--
ALTER TABLE `summary_records`
  MODIFY `entry_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
