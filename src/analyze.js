import execa from 'execa';

export default async () => {
  await execa('yarn');
  console.log('Analysis complete.');
};
