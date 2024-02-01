import { Stack } from '@/components';

function Exercise() {
  return (
    <Stack vertical gap={0} my={20} mx={20}>
      <h2>Exercise</h2>
      <Stack>
        <p>Do 10 pushups</p>
        <p>Do 10 squats</p>
        <p>Do 10 situps</p>
      </Stack>
    </Stack>
  );
}

export default Exercise;
