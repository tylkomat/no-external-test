import {enforce, test, create}  from 'vest';
import got from 'got';
import FormData from 'form-data';
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({request}: RequestEvent) {
  const formData = await request.formData();
  const something = formData.get('something');

  const suite = create((something: FormDataEntryValue | null) => {
    test('something', 'Please enter something', () => {
      enforce(something).isNotEmpty();
    });
  });

  const validationResult = suite(something);

  if(validationResult.hasErrors()) {
    return {
      status: 400,
      body: {
        errors: validationResult.getErrors(),
      }
    };
  }

  const params = new FormData();
  params.append('something', something as string);

  const response: any = await got.post('https://httpbin.org/post', {
    body: params
  }).json();

  return {
    body: {
      success: response.form
    }
  };
}
